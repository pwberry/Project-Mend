import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  impacted: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  over18: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  interest: z.string().min(10, "Please provide at least 10 characters"),
  sampleWriting: z.string().optional(),
  // Keep schema loose here; we’ll clean it up in code
  files: z.any().optional(),
});

type FormData = z.infer<typeof formSchema> & {
  files?: FileList | File[] | null;
};

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Normalize files to a simple File[] safely
      let filesArray: File[] = [];

      if (data.files instanceof FileList) {
        filesArray = Array.from(data.files);
      } else if (Array.isArray(data.files)) {
        // In case RHF gives us an array already
        filesArray = data.files.filter(
          (f): f is File => f instanceof File
        );
      }

      // Build a safe payload (don’t let JSON.stringify see FileList/File)
      const filesPayload = await Promise.all(
        filesArray.map(async (file) => ({
          fileName: file.name,
          content: await file.text(), // if you don't need content, you can remove this
        }))
      );

      // Strip out the original `files` so we never serialize FileList/File
      const { files, ...rest } = data;

      const formDataToSend = {
        ...rest,
        files: filesPayload,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzduAzI8yc_ytBRxbDzJkt-pxgTQab6I_hfMTpHNaw7DZarSGPH8SvM4_4LP2m73Loc/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      // If you want to see what the server returns for debugging:
      // const text = await response.text();
      // console.log("Raw server response:", text);

      if (response.ok) {
        toast.success("Application submitted successfully!");
        reset();
      } else {
        toast.error("Error submitting application.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong submitting your application.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join the Editorial Team
            </h1>
          </div>

          {/* About the Position */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Do you want to produce and publish your own stories? Do you want to participate
                in the production and manufacturing of <em>Mend</em>, an anthology of work by
                incarcerated and formerly incarcerated individuals and their families? Do you
                want to participate in workshops on multimedia storytelling?
              </p>
              <p>
                The Project Mend apprentice position is open to residents of Central New York who
                have been impacted by mass incarceration. You will have the opportunity to work
                collaboratively to plan, design, and edit the journal <em>Mend</em> and to learn
                how to create your own digital stories.
              </p>
              <p>
                You&apos;ll also get a chance to meet with guest speakers, participate in humanities
                events, and learn the skills needed to publish your own work.
              </p>
              <p className="font-semibold text-foreground">
                Participants will receive a stipend for attending.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Attend weekly meetings at Syracuse University.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>You just need an interest in writing. No technical skills required.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Apply to Join Our Team
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Criminal Justice System Impact */}
              <div className="space-y-2">
                <Label className="text-base">
                  Have you been impacted by the criminal justice system? *
                </Label>
                <RadioGroup
                  onValueChange={(value) =>
                    setValue("impacted", value as "yes" | "no", { shouldValidate: true })
                  }
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="impacted-yes" />
                    <Label htmlFor="impacted-yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="impacted-no" />
                    <Label htmlFor="impacted-no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
                {errors.impacted && (
                  <p className="text-sm text-destructive">{errors.impacted.message}</p>
                )}
              </div>

              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-
