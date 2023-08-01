import { Link } from "react-router-dom";
import GET_APPLICATION from "./../../apollo/queries/ApplicationQuery";
import { useQuery } from '@apollo/client';
import ProcessingCircular from "./../processing/ProcessingCircular";

export default function PartialFooter({
  paragraph,
  linkName,
  linkUrl = "#",
}: any) {
  return (
    <p className="mt-2 text-center text-sm text-gray-600 mt-5">
      {paragraph}{" "}
      <Link
        to={linkUrl}
        className="font-medium text-orange-600 hover:text-orange-500"
      >
        {linkName}
      </Link>
    </p>
  );
}
