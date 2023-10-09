import ReactPaginate from "react-paginate";
interface PaginationProps {
  handlePageClick(selectedItem: { selected: number }): void;
  initialPage: number;
  pageCount: number;
  currentPage: number;
}
const Pagination = ({
  initialPage,
  pageCount,
  handlePageClick,
  currentPage,
}: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel={<i className="bx bx-dots-horizontal"></i>}
      nextLabel={
        <button className="border w-8 h-8 rounded flex items-center justify-center">
          {" "}
          <i className="bx bx-chevron-right bx-xs text-gray-700 font-medium "></i>
        </button>
      }
      onPageChange={handlePageClick}
      pageCount={pageCount}
      initialPage={initialPage}
      forcePage={currentPage}
      disableInitialCallback={true}
      previousLabel={
        <button className="border w-8 h-8 rounded flex items-center justify-center">
          {" "}
          <i className="bx bx-chevron-left bx-xs text-gray-700 font-medium "></i>
        </button>
      }
      renderOnZeroPageCount={null}
      containerClassName=" pagination flex flex-wrap justify-center   gap-2  items-center w-fit"
      pageClassName="page-item text-sm text-gray-700 border bg-white rounded "
      pageLinkClassName="page-link w-8 h-8 flex items-center justify-center font-medium"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active bg-gray-300  text-white border-white overflow-hidden"
      activeLinkClassName="bg-gray-500 text-white "
    />
  );
};

export default Pagination;
