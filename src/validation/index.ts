export type TProductSchema = {
  title: string;
  thumbnail: string;
  description: string;
  price: string;
};

/**
 * Validates a product object for required fields and constraints.
 *
 * @param {Object} product - The product to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.thumbnail - The URL of the product's image.
 * @param {string} product.price - The price of the product.
 *
 * @returns {Object} - An object containing error messages for invalid fields.
 * @property {string} title - Error message for the title field.
 * @property {string} description - Error message for the description field.
 * @property {string} thumbnail - Error message for the thumbnail field.
 * @property {string} price - Error message for the price field.
 */
export const productSchema = (product: TProductSchema) => {
  const errors: TProductSchema = {
    title: "",
    thumbnail: "",
    description: "",
    price: "",
  };

  // Check all values is not empty
  // Object.entries(product).forEach(([key, value]) => {
  //   if (!value.trim() || value === "") {
  //     return (errors[
  //       key as keyof TProductSchema
  //     ] = `Product ${key} is required`);
  //   }
  // });

  // Todo: =>  Title
  if (!product.title.trim() || product.title === "") {
    errors.title = "Product Title is Required";
  } else if (product.title.length < 5 || product.title.length > 80) {
    errors.title =
      "Product Title characters must be between 5 to 80 character.";
  }

  // Todo: =>  Description
  if (!product.description.trim() || product.description === "") {
    errors.description = "Product Description is Required";
  } else if (
    product.description.length < 10 ||
    product.description.length > 9999
  ) {
    errors.description =
      "Product description characters must be between 10 to 9999 character.";
  }

  // Todo: =>  Thumbnail
  if (!product.thumbnail.trim() || product.thumbnail === "") {
    errors.thumbnail = "Product Thumbnail is Required";
  } else if (
    !product.thumbnail.startsWith("http") ||
    !product.thumbnail.startsWith("https")
  ) {
    errors.thumbnail = "Invalid thumbnail url";
  }

  // Todo: =>  Price
  if (isNaN(Number(product.price)) || Number(product.price) === 0) {
    errors.price = "Valid price is required!";
  } else if (Number(product.price) < 0) {
    errors.price = "Product price cannot be a negative value.";
  }

  return errors;
};
