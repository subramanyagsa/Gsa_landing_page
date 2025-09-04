"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface ConsultationDialogProps {
  children: React.ReactNode;
}

const ConsultationDialog = ({ children }: ConsultationDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleFormSubmit = () => {
    setOpen(false); // Close the dialog after form submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule a Free Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly to discuss your needs.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onFormSubmit={handleFormSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;