"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { SelectLocation } from './schema';

import { Button } from "../ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from '../ui/command';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Separator } from '../ui/separator';
// import { CheckIcon } from '../ui/check';
import { SearchIcon } from "../ui/search";
import { SelectorIcon } from "../ui/selector";

// import { cn } from '../ui/utils';
import Link from "next/link";

export function SearchPanel() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <div className="w-full">
      <div className="rounded-full border border-black/10 bg-white text-black shadow-xl shadow-neutral-900/5 transition-shadow hover:shadow hover:shadow-neutral-900/5">
        <div className="relative grid h-16 w-full grid-cols-1 items-center">
          <div className="grid h-full grid-cols-[33.333333%_33.333333%_33.333333%] items-center justify-center">
            <div className="relative h-full w-full">
              <div className="w-full items-center h-full">
                <div className="flex-col overflow-hidden hover:bg-orange-100 py-1 h-full px-5 rounded-full w-full">
                  <div className="flex w-full items-center justify-between h-full">
                    <div className="flex size-full flex-col items-start justify-center">
                      <div className="text-[13px] font-bold">
                        Pick-up / Drop-off
                      </div>
                    </div>
                    <SelectorIcon className="-mr-2 ml-2  size-5 shrink-0 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="flex size-full items-center">
                <div className="w-full h-full flex-col overflow-hidden rounded-full hover:bg-orange-100 px-5 py-3 focus-visible:z-10">
                  <div className="flex w-full flex-col items-start justify-center truncate">
                    <div className="text-[13px] font-bold">Check out</div>

                    <div className="font-semibold text-neutral-800 flex flex-col justify-start items-start">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="flex size-full items-center">
                <div className="w-full flex-col overflow-hidden rounded-full h-full hover:bg-orange-100 py-3 pl-5 pr-16 focus-visible:z-10">
                  <div className="flex w-full flex-col items-start justify-center truncate">
                    <div className="text-[13px] font-bold">Check out</div>

                    <div className="font-semibold text-neutral-800 flex flex-col justify-start items-start">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-2 z-20">
            <Link
              href="cars"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F8462E] hover:bg-[#F8462E]/80 text-white"
            >
              <SearchIcon className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
