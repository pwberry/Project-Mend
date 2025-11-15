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

type FormData = z.infer<typeof formSchema>;

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Application submitted successfully!");
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
                in the production and manufacturing of Mend, an anthology of work by incarcerated 
                and formerly incarcerated individuals and their families? Do you want to participate 
                in workshops on multimedia storytelling?
              </p>
              <p>
                The Project Mend apprentice position is open to residents of Central New York who 
                have been impacted by mass incarceration. You will have the opportunity to work 
                collaboratively to plan, design, and edit the journal Mend and to learn how to 
                create your own digital stories.
              </p>
              <p>
                You'll also get a chance to meet with guest speakers, participate in humanities 
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Apply to Join Our Team</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Criminal Justice System Impact */}
              <div className="space-y-2">
                <Label className="text-base">
                  Have you been impacted by the criminal justice system? *
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("impacted", value as "yes" | "no")}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="impacted-yes" />
                    <Label htmlFor="impacted-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="impacted-no" />
                    <Label htmlFor="impacted-no" className="font-normal cursor-pointer">No</Label>
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
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  {...register("address")}
                  placeholder="Enter your full address"
                  rows={3}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address.message}</p>
                )}
              </div>

              {/* Over 18 */}
              <div className="space-y-2">
                <Label className="text-base">Are you over the age of 18? *</Label>
                <RadioGroup
                  onValueChange={(value) => setValue("over18", value as "yes" | "no")}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="over18-yes" />
                    <Label htmlFor="over18-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="over18-no" />
                    <Label htmlFor="over18-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
                {errors.over18 && (
                  <p className="text-sm text-destructive">{errors.over18.message}</p>
                )}
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest">
                  Why are you interested in a position with Project Mend? *
                </Label>
                <Textarea
                  id="interest"
                  {...register("interest")}
                  placeholder="Tell us about your interest..."
                  rows={5}
                />
                {errors.interest && (
                  <p className="text-sm text-destructive">{errors.interest.message}</p>
                )}
              </div>

              {/* Sample Writing */}
              <div className="space-y-2">
                <Label htmlFor="sampleWriting">
                  Do you have any sample writing that you'd like to share? This is not required.
                </Label>
                <Textarea
                  id="sampleWriting"
                  {...register("sampleWriting")}
                  placeholder="Paste your sample writing here (optional)"
                  rows={5}
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files">Upload files (optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Input
                    id="files"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    {...register("files")}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload up to 5 supported files. Max 100 MB per file.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </div>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              Questions? Reach out at{" "}
              <a href="mailto:mendthejournal@gmail.com" className="text-primary hover:underline">
                mendthejournal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
