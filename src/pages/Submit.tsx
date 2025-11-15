import { Button } from "@/components/ui/button";
import submitImage from "@/assets/BrianHindson.jpg";

const Submit = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Submit your work
          </h1>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <img 
                src={submitImage} 
                alt="Submit to Mend - Artwork by Brian Hindson, Intertext 2023" 
                className="w-1/2 h-auto rounded-lg border-2 border-border"
              />
            </div>
            <div className="flex items-center">
              <p className="text-lg text-foreground leading-relaxed">
                Mend is an online and print journal that celebrates the lives and creative work of individuals impacted by the criminal legal system. This annual publication features writing of all kinds—fiction, poetry, and nonfiction—as well as visual, audio, and video submissions. While contributors may choose to write about experiences with incarceration, Mend welcomes work on any topic, in any genre or modality.
              </p>
            </div>
          </div>

          {/* Submission Process */}
          <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Submission Information</h2>
            <div className="space-y-6">
              <p className="text-foreground">
                Submissions are accepted on an ongoing basis and may be sent by mail or electronically.
              </p>
              
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Mail submissions to:</h3>
                <div className="text-muted-foreground space-y-1 ml-4">
                  <p>Editors, Mend</p>
                  <p>c/o Patrick W. Berry</p>
                  <p>Syracuse University</p>
                  <p>239 H.B. Crouse Hall</p>
                  <p>Syracuse, NY 13244</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Electronic submissions:</h3>
                <p className="text-muted-foreground ml-4">
                  Use the link below or email your work to{" "}
                  <a href="mailto:mendthejournal@gmail.com" className="text-primary hover:underline">
                    mendthejournal@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">All submissions should include:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Contact information (mailing address, email, and phone number, if available)</li>
                  <li>A 50-word bio for publication if accepted</li>
                  <li>A brief note confirming that you have been impacted by the criminal legal system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Guidelines</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>We accept only previously unpublished material.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>You may submit up to five pieces of writing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>You may submit any number of visual art pieces.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Written submissions should not exceed six pages (or approximately 1,800 words).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Art files should be submitted as .jpg (highest available resolution).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Video files should be submitted as .mp4.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Audio files should be submitted as .mp3.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg px-10"
              asChild
            >
              <a href="mailto:mendthejournal@gmail.com">
                Submit Your Work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
