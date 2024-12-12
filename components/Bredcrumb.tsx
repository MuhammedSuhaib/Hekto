import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Dot } from "lucide-react";

// Define the prop type for Bredcrumb
interface BredcrumbProps {
  pageName: string;
}

function Bredcrumb({ pageName }: BredcrumbProps) {
  return (
    <div className="h-fit bg-[#F6F5FF] p-4 text-xl font-medium text-[#101750] md:text-[36px] lg:h-[286px] lg:px-[371px] lg:py-24">
      <h1 className="font-extrabold mb-2">{pageName}</h1>

      <Breadcrumb>
        <BreadcrumbList className="text-base text-black">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Dot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Dot />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FB2E86]">
              {pageName}{" "}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Bredcrumb;
