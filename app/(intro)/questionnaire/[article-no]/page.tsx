"use client";
import { getProductDetail } from "@/data/product-details";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: {
    "article-no": string;
  };
}

export default function DetailProductPage({ params }: ProductDetailPageProps) {
  const articleNo = params["article-no"];
  const product = getProductDetail(articleNo);

  if (!product) {
    notFound();
  }

  const parseDescription = (description: string) => {
    const sections: { title: string; content: string }[] = [];
    const lines = description.split("\n");
    let currentSection = { title: "", content: "" };
    let inSection = false;

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (
        trimmedLine.match(
          /^(General features|Comfort features|Protection features|Application areas|Sustainability|Thermal protection)$/i
        )
      ) {
        if (currentSection.title) {
          sections.push({ ...currentSection });
        }
        currentSection = { title: trimmedLine, content: "" };
        inSection = true;
      } else if (inSection && trimmedLine.startsWith("•")) {
        currentSection.content += trimmedLine + "\n";
      } else if (!inSection && trimmedLine) {
        if (!currentSection.title) {
          currentSection.content += trimmedLine + "\n";
        }
      }
    });

    if (currentSection.title || currentSection.content) {
      sections.push(currentSection);
    }

    return sections;
  };

  const sections = parseDescription(product.description);
  const mainDescription = sections.find((s) => !s.title)?.content || "";
  const featureSections = sections.filter((s) => s.title);

  return (
    <div className="min-h-screen  ">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/questionnaire"
            className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative    ">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.productName}
                  height={600}
                  width={400}
                  className="object-contain w-full  rounded-2xl"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No image available
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <p className="text-sm text-gray-400">
                  Article number: {product.articleNo}
                </p>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-6 capitalize">
                {product.productName}
              </h1>

              {mainDescription && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-3">
                    strong. sporty. functional.
                  </h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {mainDescription}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {featureSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.content
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-gray-300 text-sm leading-relaxed"
                          >
                            {line.trim()}
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
