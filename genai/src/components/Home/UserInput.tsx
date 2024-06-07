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
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a Model" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="llama3-8b-8192">LLaMA3 8b</SelectItem>
                                                        <SelectItem value="llama3-70b-8192">LLaMA3 70b</SelectItem>
                                                        <SelectItem value="mixtral-8x7b-32768">Mixtral 8x7b</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    You can manage email addresses in your{" "}
                                                    <Link href="/examples/forms">email settings</Link>.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
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