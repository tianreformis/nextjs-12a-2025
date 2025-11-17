"use client";

import { useRouter } from "next/navigation";


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
}
const PaginationComponent =({currentPage, totalPages, basePath}:PaginationProps) => {
    const router = useRouter();

    const gotoPage = (page:number) => {
        const params = new URLSearchParams();
        if (page >1) params.set('page', page.toString());
        const url = `${basePath}?${params.toString() ? `?${params.toString()}` : ''}`;
    };

    if (totalPages <= 1) return null;
    const pageNumbers = [];
   

    return (
        <div>Pagination Component</div>
    );
}
export default PaginationComponent;