import { Toaster as Sonner, type ToasterProps } from "sonner"
import "sonner/dist/styles.css"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "#f3f3f3",
          "--normal-text": "#000000",
          "--normal-border": "transparent",
          "--border-radius": "0.375rem",
        } as React.CSSProperties
      }
      toastOptions={{
        duration: 5000,
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-black",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
