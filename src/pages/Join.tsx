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
      let filesArray: File[] = [];

      if (data.files instanceof FileList) {
        filesArray = Array.from(data.files);
      } else if (Array.isArray(data.files)) {
        filesArray = data.files.filter((f): f is File => f instanceof File);
      }

      // Only send filenames — easier + smaller payload
      const filesPayload = filesArray.map((file) => ({
        fileName: file.name,
      }));

      const { files, ...rest } = data;

      const formDataToSend = {
        ...rest,
        files: filesPayload,
      };

      console.log("Sending:", formDataToSend);

      // IMPORTANT: no-cors + text/plain
      await fetch(
        "https://script.google.com/macros/s/AKfycbzduAzI8yc_ytBRxbDzJkt-pxgTQab6I_hfMTpHNaw7DZarSGPH8SvM4_4LP2m73Loc/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      toast.success("Application submitted successfully!");
      reset();

    } catch (error) {
      console.error("Submit error:", error);
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

          {/* About Section */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Do you want to produce and publish your own stories? Do you want to participate
                in the production and manufacturing of <em>Mend</em>, an anthology of work by
                incarcerated and formerly incarcerated individuals and their families?
              </p>
              <p>
                The Project Mend apprentice position is open to residents of Central New York who
                have been impacted by mass incarceration.
              </p>
              <p>
                You’ll learn multimedia storytelling, editing, publishing, and work collaboratively
                on new issues of <em>Mend</em>.
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
                  <span>Interest in writing — no technical skills required.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Apply to Join Our Team
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Impacted */}
              <div className="space-y-2">
                <Label>Have you been impacted by the criminal justice system? *</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    setValue("impacted", value as "yes" | "no", { shouldValidate: true })
                  }
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="impacted-yes" />
                    <Label htmlFor="impacted-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="impacted-no" />
                    <Label htmlFor="impacted-no">No</Label>
                  </div>
                </RadioGroup>
                {errors.impacted && (
                  <p className="text-sm text-destructive">{errors.impacted.message}</p>
                )}
              </div>

              {/* First name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input id="firstName" {...register("firstName")} placeholder="Enter your first name" />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input id="lastName" {...register("lastName")} placeholder="Enter your last name" />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email address *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input id="phone" type="tel" {...register("phone")} placeholder="(123) 456-7890" />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea id="address" {...register("address")} rows={3} placeholder="Your full address" />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address.message}</p>
                )}
              </div>

              {/* Over 18 */}
              <div className="space-y-2">
                <Label>Are you over the age of 18? *</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    setValue("over18", value as "yes" | "no", { shouldValidate: true })
                  }
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="over18-yes" />
                    <Label htmlFor="over18-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="over18-no" />
                    <Label htmlFor="over18-no">No</Label>
                  </div>
                </RadioGroup>
                {errors.over18 && (
                  <p className="text-sm text-destructive">{errors.over18.message}</p>
                )}
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest">Why are you interested in this position? *</Label>
                <Textarea
                  id="interest"
                  rows={5}
                  {...register("interest")}
                  placeholder="Tell us why you'd like to participate..."
                />
                {errors.interest && (
                  <p className="text-sm text-destructive">{errors.interest.message}</p>
                )}
              </div>

              {/* Sample writing */}
              <div className="space-y-2">
                <Label htmlFor="sampleWriting">Sample writing (optional)</Label>
                <Textarea id="sampleWriting" {...register("sampleWriting")} rows={5} />
              </div>

              {/* Files */}
              <div className="space-y-2">
                <Label htmlFor="files">Upload files (optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Input
                    id="files"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    {...register("files")}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload up to 5 files.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </div>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              Questions? Email{" "}
              <a href="mailto:mend@project-mend.net" className="text-primar
