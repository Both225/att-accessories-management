import { Pagination as PaginationApi } from "antd";
import { PAGE_SIZE } from "../utils/contains";
import { useSearchParams } from "react-router-dom";

function Pagination({ total }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function handlePageChange(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  return (
    <>
      <br />
      <PaginationApi
        current={currentPage}
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        pageSize={PAGE_SIZE}
        hideOnSinglePage={true}
        size="small"
        onChange={(page) => handlePageChange(page)}
      />
    </>
  );
}

export default Pagination;
