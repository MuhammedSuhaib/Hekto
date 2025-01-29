import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonProductCard() {
    return (
        <div className="flex flex-col items-center p-4 shadow-md rounded-lg border border-gray-200">
            {/* Image Skeleton */}
            <Skeleton className="h-56 w-full rounded-lg bg-gray-300" />

            {/* Name Skeleton */}
            <Skeleton className="mt-4 h-5 w-2/3 rounded bg-gray-300" />

            {/* Rating Skeleton */}
            <Skeleton className="mt-2 h-3 w-1/3 rounded bg-gray-300" />

            {/* Price Skeleton */}
            <Skeleton className="mt-2 h-4 w-1/4 rounded bg-gray-300" />
        </div>
    );
}
