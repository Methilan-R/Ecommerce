import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import clsx from "clsx"; // Optional: For class management (if you use it)

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between">
      <div
        className="cursor-pointer"
        onClick={() => handleGetProductDetails(product?._id)}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>

        <CardContent className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{product?.title}</h2>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{categoryOptionsMap[product?.category]}</span>
            <span>{brandOptionsMap[product?.brand]}</span>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ₹{product?.price}
            </span>
            {product?.salePrice > 0 && (
              <span className="text-lg font-semibold text-primary">
                ₹{product?.salePrice}
              </span>
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter className="mt-auto">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed" disabled>
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
