const Category = require("../models/category.model");
const Product = require("../models/product.model");

const createProduct = async (reqData) => {
  try {
    let topLavel = await Category.findOne({ name: reqData.topLavelCategory });
    if (!topLavel) {
      topLavel = new Category({
        name: reqData.topLavelCategory,
        level: 1,
      });

      await topLavel.save();
    }

    let secondLavel = await Category.findOne({
      name: reqData.secondLavelCategory,
      parentCategory: topLavel._id,
    });

    if (!secondLavel) {
      secondLavel = new Category({
        name: reqData.secondLavelCategory,
        parentCategory: topLavel._id,
        level: 2,
      });

      await secondLavel.save();
    }

    let thirdLavel = await Category.findOne({
      name: reqData.thirdLavelCategory,
      parentCategory: secondLavel._id,
    });

    if (!thirdLavel) {
      thirdLavel = new Category({
        name: reqData.thirdLavelCategory,
        parentCategory: secondLavel._id,
        level: 3,
      });
      await thirdLavel.save();
    }

    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      discountedPrice: reqData.discountedPrice,
      discountPersent: reqData.discountPersent,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.sizes,
      quantity: reqData.quantity,
      category: thirdLavel._id,
    });

    return await product.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteProduct = async (productId) => {
    const product = await findProductById(productId);
    await Product.findByIdAndDelete(productId);
    return "Product deleted Successfully";
};

const updateProduct = async (productId, reqData) => {
    return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (id) => {
    const product = await Product.findById(id).populate("category").exec();

    if (!product) {
      throw new Error("Product not found with id " + id);
    }
    return product;
};

const getAllProducts = async (reqQuery) => {
    let {
      category,
      color,
      size,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize,
    } = reqQuery;

    pageSize = pageSize || 10;

    let query = Product.find().populate("category");

    if (category) {
      const existingCategory = await Category.findOne({name:category});
      if (existingCategory) {
        query = query.where("category").equals(existingCategory._id);
      } else {
        return { content: [], currentPage: 1, totalPages: 0 };
      }
    }
    // white, yellow, green
    if (color) {
      const colorSet = new Set(
        color.split(",").map((color) => color.trim().toLowerCase())
      );

      const colorRegex =
        colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
      query = query.where("color").regex(colorRegex);
    }
    if (size) {
      const sizesSet = new Set(size);
      query = query.where("sizes.name").in([...sizesSet]);
    }
    if (minPrice && maxPrice) {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }
    if (minDiscount) {
      query = query.where("discountPersent").gt(minDiscount);
    }
    if (stock) {
      if (stock == "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock == "out_of_stock") {
        query = query.where("quantity").equals(0);
      }
    }
    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }
    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber-1) * pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.populate("category").exec();

    const totalPages = Math.ceil(totalProducts / pageSize);

    return { content: products, currentPage: pageNumber, totalPages };
};

const createMultiProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultiProduct,
};
