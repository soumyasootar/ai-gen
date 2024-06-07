"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import MetaIcon from "../icon/Meta"
import MistralIcon from "../icon/Mistral"
import { Slider } from "../ui/slider"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"



const formSchema = z.object({
    model: z.string(),
    content: z.string().min(50, { message: "Content must be at least 50 characters" }).max(500, { message: "Content must be no more than 500 characters" }),
    temperature: z.number().min(0, { message: "Temperature must be greater than 0" }).max(2, { message: "Temperature must be less than 2" }),
    type: z.enum(["personal", "brand"], {
        errorMap: () => {
            return {
                message: "Please select a type"
            }
        }
    }),
    tone: z.enum(["professional", "casual", "sarcastic", "funny", "passionate", "thoughtful"], {
        errorMap: () => {
            return {
                message: "Please select a tone"
            }
        }
    }),
    emoji: z.boolean(),
})

const UserInput = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            model: "llama3-8b-8192",
            content: "",
            temperature: 0.5,
            type: "personal",
            tone: "professional",
            emoji: false,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }


    return (
        <div className="relative flex flex-col items-start gap-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-start gap-6">
                    <fieldset className="grid gap-6 rounded-[8px] border p-4 bg-background/10 backdrop-blur-sm">
                        <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
                        <div className="grid gap-3">
                            <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FormItem>
                                                <FormLabel>Model</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a Model" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="llama3-8b-8192">
                                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                                <MetaIcon className="size-5" />
                                                                <div>
                                                                    <p>
                                                                        <span className="text-foreground font-medium mr-2">
                                                                            Llama 3
                                                                        </span>
                                                                        8B
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </SelectItem>
                                                        <SelectItem value="mixtral-8x7b-32768">
                                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                                <MistralIcon className="size-5" />
                                                                <div>
                                                                    <p>
                                                                        <span className="text-foreground font-medium mr-2">
                                                                            Mixtral
                                                                        </span>
                                                                        8x7b
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </SelectItem>
                                                        <SelectItem value="llama3-70b-8192">
                                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                                <MetaIcon className="size-5" />
                                                                <div>
                                                                    <p>
                                                                        <span className="text-foreground font-medium mr-2">
                                                                            Llama 3
                                                                        </span>
                                                                        70B
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="grid gap-3">
                            <FormField
                                control={form.control}
                                name="temperature"
                                render={({ field: { value, onChange } }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center justify-between pb-2"><span className="flex items-center justify-center">Creativity
                                            <Tooltip>
                                                <TooltipTrigger><Info className="w-4 h-4 ml-1 cursor-pointer" /></TooltipTrigger>
                                                <TooltipContent sideOffset={25} collisionPadding={25} className="max-w-sm">
                                                    <p>A higher setting produces more creative and surprising bios, a lower setting sticks to more predictable and conventional styles.</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </span>
                                            <span>{value}</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Slider defaultValue={[0.5]} min={0} max={2} step={0.1} onValueChange={(val) => onChange(val[0])} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </fieldset>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default UserInput