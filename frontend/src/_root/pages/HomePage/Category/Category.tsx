// @ts-nocheck
import { FC } from "react";
import CustomButton from "../../../../common/CustomButton/CustomButton";
import IconArrowCurve from "../../../../icons/IconArrowCurve";

interface CategoryProps {
  title: string;
  heading: HTMLElement;
  list: ListItemType[];
  buttonText: string;
  buttonClick(): void;
}

const Category: FC<CategoryProps> = ({
  title,
  heading,
  list,
  buttonText,
  buttonClick = () => {},
}) => {
  return (
    <>
      <div className="pt-16 pb-6">
        <span className="font-TTHoves text-body-normal text-dark-5 my-2">
          {title}
        </span>
        <div className="w-[437px] font-OTabolas text-sub-heading-bold text-dark-8">
          {heading}
        </div>
      </div>
      <div>
        <div>
          {list?.map(({ header, message }) => (
            <ListItem listHeader={header} listMessage={message} />
          ))}
        </div>
        <div className="px-4 py-4">
          <CustomButton
            className="flex items-center bg-brown-10 text-white border-none"
            onClick={buttonClick}
          >
            <span className="px-0">{buttonText}</span>
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Category;

type ListItemType = {
  listHeader: string;
  listMessage: string;
};

interface ListItemTypeProps {
  listHeader: string;
  listMessage: string;
}

const ListItem: FC<ListItemTypeProps> = ({ listHeader, listMessage }) => {
  return (
    <div className="flex items-center py-4">
      <div className="m-4">
        <IconArrowCurve />
      </div>
      <div className="flex flex-col">
        <div className="text-body-small font-semibold text-dark-8 pb-2">
          {listHeader}
        </div>
        <div className="text-base text-dark-5 font-TTHoves">{listMessage}</div>
      </div>
    </div>
  );
};
