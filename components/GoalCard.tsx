import { createClient } from "@/utils/supabase/server";

import { type ComponentProps } from "react";
import React, { Component } from "react";
import { Button } from "./ui/button";
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import ButtonDlt from "./buttons/ButtonDlt";
import { DialogDemo } from "./buttons/Update";

async function GoalCard({ data }: { data: string }) {
  const supabase = createClient();

  let { data: note, error } = await supabase
    .from("note")
    .select()
    .eq("user_id", data);
  return (
    <section className="flex  p-3">
      <div className=" flex  w-full justify-center items-center ">
        <div>
          <div className=" grid lg:grid-cols-5  sm:grid-cols-2 gap-3 py-2 px-4 ">
            {note?.map((e) => (
              <div
                key={e.id}
                className=" border-gray-800 px-4 py-5 border w-auto h-auto  rounded-md hover:scale-105 transition-all duration-75"
              >
                <div>
                  <article className="">
                    <h1 className="text-white text-left   font-bold  text-lg ">
                      {e.title}
                    </h1>
                  </article>
                </div>
                <div className="flex  justify-end gap-2 mt-5 w-full">
                  <ButtonDlt id={e.id} />
                  <DialogDemo id={e.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalCard;
