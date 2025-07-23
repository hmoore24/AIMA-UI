import * as React from "react"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function MultiSelect({ options, value = [], onChange, placeholder }) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (option) => {
    if (value.includes(option.value)) {
      onChange(value.filter((val) => val !== option.value));
    } else {
      onChange([...value, option.value]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {value.length > 0
            ? options
                .filter((option) => value.includes(option.value))
                .map((option) => option.label)
                .join(", ")
            : placeholder || "Select..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => handleSelect(option)}
                className="cursor-pointer justify-between"
              >
                {option.label}
                {value.includes(option.value) ? (
                  <X className="ml-2 h-4 w-4 text-muted-foreground" />
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
