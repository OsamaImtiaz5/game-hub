import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BiChevronDown } from "react-icons/bi";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder?: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];
  const currentSortOrder= sortOrders.find((order)=>order.value===selectedSortOrder)
  //   if (error) return null;
  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button bgColor={"gray.700"} color={"white"} focusRing={"none"}>
            <span>Order By: {currentSortOrder?.label || "Relevance"}</span> <BiChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
