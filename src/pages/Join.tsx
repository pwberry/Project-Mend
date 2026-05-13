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
      const { files, ...rest } = data; // drop files for now

      await fetch(
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
        {
          method: "POST",
          mode: "no-cors", // safe for Apps Script
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(rest),
        }
      );

      toast.success("Application submitted successfully!");
      reset();
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong submitting your application.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Join the Editorial Team
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card border border-border rounded-lg p-8">
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
              {errors.impacted && <p className="text-sm text-destructive">{errors.impacted.message}</p>}
            </div>

            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First name *</Label>
              <Input id="firstName" {...register("firstName")} />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name *</Label>
              <Input id="lastName" {...register("lastName")} />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Textarea id="address" {...register("address")} rows={3} />
              {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
            </div>

            {/* Over 18 */}
            <div className="space-y-2">
              <Label>Are you over 18? *</Label>
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
              {errors.over18 && <p className="text-sm text-destructive">{errors.over18.message}</p>}
            </div>

            {/* Interest */}
            <div className="space-y-2">
              <Label>Why are you interested? *</Label>
              <Textarea {...register("interest")} rows={5} />
              {errors.interest && <p className="text-sm text-destructive">{errors.interest.message}</p>}
            </div>

            {/* Sample Writing */}
            <div className="space-y-2">
              <Label>Sample Writing (optional)</Label>
              <Textarea {...register("sampleWriting")} rows={5} />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">Submit Application</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
