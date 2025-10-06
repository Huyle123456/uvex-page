"use client";

import { Button } from "@/components/button";
import type { Product } from "@/data/product-answers";
import Link from "next/link";
import Image from "next/image";

interface ResultsListProps {
  products: Product[];
  onRestart: () => void;
}

export const ResultsList = ({ products, onRestart }: ResultsListProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className=" backdrop-blur-sm rounded-2xl p-6 space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/questionnaire/${product.articleNo}`}
              target="_blank"
              key={product.articleNo}
              className="flex items-center gap-4   rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <div className="h-[80px] w-[80px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  className="object-contain"
                  src={product.image ?? "/images/placeholder.png"}
                  alt={product.productName}
                  width={80}
                  height={80}
                ></Image>
              </div>

              <div className="flex-1">
                <p className="text-xs text-neutral-400 mb-1">
                  Article number: {product.articleNo}
                </p>
                <p className="text-[14px] md:text-lg font-medium text-white capitalize">
                  {product.productName}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-neutral-400">
              No matching products found. Please try again with different
              selections.
            </p>
          </div>
        )}
      </div>

      <div className=" backdrop-blur-sm rounded-2xl p-6 space-y-4">
        <p className="text-sm text-neutral-400">
          *This solution is based on a general specification, please check with
          the local representative at{" "}
          <a
            href="mailto:sales@uvex-safety.com.sg"
            className="text-[#C7D562] hover:underline"
          >
            sales@uvex-safety.com.sg
          </a>{" "}
          if you require additional assistance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <p className=" font-medium">Find other solutions?</p>
          <Button onClick={onRestart} className=" w-full sm:w-auto">
            Restart the questionnaire
          </Button>
        </div>
      </div>
    </div>
  );
};
