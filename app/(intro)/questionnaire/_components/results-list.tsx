"use client";

import { Button } from "@/components/button";
import type { Product } from "@/data/product-answers";
import Image from "next/image";
import Link from "next/link";

interface ResultsListProps {
  products: Product[];
  onRestart: () => void;
}

export const ResultsList = ({ products, onRestart }: ResultsListProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className=" backdrop-blur-sm rounded-2xl p-2 md:p-6 space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/questionnaire/${product.articleNo}`}
              target="_blank"
              key={product.articleNo}
              className="flex items-center gap-4   rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <div className="bg-white rounded-[12px] overflow-hidden flex items-center justify-center">
                <Image
                  className="object-contain w-[84px] h-[84px] md:w-[120px] md:h-[120px]"
                  src={product.image ?? "/images/placeholder.png"}
                  alt={product.productName}
                  width={120}
                  height={120}
                ></Image>
              </div>

              <div className="flex-1">
                <p className="text-[14px] text-neutral-400 mb-1">
                  Article number: {product.articleNo}
                </p>
                <p className="text-[20px] md:text-[24px] font-medium text-white capitalize">
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
          <div className="text-[16px] text-left md:w-fit w-full ">Find other solutions?</div>
          <Button onClick={onRestart} className=" w-full sm:w-auto">
            Restart the questionnaire
          </Button>
        </div>
      </div>
    </div>
  );
};
