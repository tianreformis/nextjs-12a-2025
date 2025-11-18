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
        router.push(url);
    };

    if (totalPages <= 1) return null;
    const pageNumbers = [];
    const maxVsiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVsiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVsiblePages - 1);

    if (endPage - startPage +1  < maxVsiblePages) {
        startPage = Math.max(1, endPage - maxVsiblePages + 1);
    }
   

    return (
        <nav className="flex justify-center items-center gap-1 mt-10">

        </nav>
    );
}
export default PaginationComponent;