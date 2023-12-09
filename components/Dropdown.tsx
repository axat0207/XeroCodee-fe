"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface dropdownInterface {
    title : string,
    dropdownHead : string,
    val1? : string,
    val2? : string,
    val3? : string,
}
export const Dropdown:React.FC<dropdownInterface>  = ({title,dropdownHead,val1,val2,val3})=> {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{dropdownHead}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">{val1}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">{val2}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">{val3}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown;