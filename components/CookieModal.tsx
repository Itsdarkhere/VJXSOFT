'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { useLayoutEffect, useState } from "react"

export default function CookieModal() {
    const [open, setOpen] = useState(false);
    useLayoutEffect(() => {
        setOpen(true)
    }, []) 
     
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Evästeiden käyttö</AlertDialogTitle>
                    <AlertDialogDescription>
                        Käytämme sivustollamme evästeitä parantaaksemme käyttökokemustasi. 
                        Evästeet auttavat meitä analysoimaan sivuston käyttöä ja kohdentamaan mainontaa. 
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Hylkää</AlertDialogCancel>
                    <AlertDialogAction>Hyväksy</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}