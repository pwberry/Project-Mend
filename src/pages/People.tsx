import { useParams, Navigate } from "react-router-dom";
// 2026 Team Images
import agnewImg from "@/assets/people/2026/agnew.jpg";
import bottingImg from "@/assets/people/2026/botting.jpg";
import ejariasImg from "@/assets/people/2026/ejarias.jpg";
import eilandImg from "@/assets/people/2026/eiland.jpg";
import kirkpatrickImg from "@/assets/people/2026/kirkpatrick.jpg";
import mcconnellImg from "@/assets/people/2026/mcconnell.jpg";
import nikolauImg from "@/assets/people/2026/nikolau.jpg";
import rodriguezImg from "@/assets/people/2026/rodriguez.jpg";
import savinoImg from "@/assets/people/2026/savino.jpg";
import shoultzImg from "@/assets/people/2026/shoultz.jpg";
import tingueImg from "@/assets/people/2026/tingue.jpg";
import withersImg from "@/assets/people/2026/withers.jpg";
import whiteImg from "@/assets/people/2026/white.jpg";
import berry from "@/assets/people/2026/berry.jpg";

//2025 Team Images
import brownleeImg from "@/assets/people/2025/brownlee.jpg";
import carrImg from "@/assets/people/2025/carr.jpg";
import crosbyImg from "@/assets/people/2025/crosby.jpg";
import huffImg from "@/assets/people/2025/huff.jpg";
import jacksonImg from "@/assets/people/2025/jackson.jpg";
import willsonImg from "@/assets/people/2025/willson.jpg";


//2024 Team Images
import andersonImg from "@/assets/people/2024/anderson.jpg";
import buffordImg from "@/assets/people/2024/bufford.jpg";
import gomezImg from "@/assets/people/2024/gomez.jpg";
import moodyImg from "@/assets/people/2024/moody.jpg";
import noelImg from "@/assets/people/2024/noel.jpg";
import parisImg from "@/assets/people/2024/paris.jpg";
import robinsonImg from "@/assets/people/2024/robinson.jpg";
import seiblesImg from "@/assets/people/2024/seibles.jpg";
import whitehurstImg from "@/assets/people/2024/whitehurst.jpg";
import willacyImg from "@/assets/people/2024/willacy.jpg";
import williamsImg from "@/assets/people/2024/williams.jpg";
import thompkinsImg from "@/assets/people/2024/williams.jpg";


// 2023 Team Images
import bingsImg from "@/assets/people/2023/bings.jpg";
import deansImg from "@/assets/people/2023/deans.jpg";
import hardyImg from "@/assets/people/2023/hardy.jpg";
import shawImg from "@/assets/people/2023/shaw.jpg";
import titusImg from "@/assets/people/2023/titus.jpg";




interface Person {
  name: string;
  role: string;
  image: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";

const teams: Record<string, Person[]> = {
  "2026": [
    { name: "Melinda Agnew", role: "Editor", image: agnewImg },
    { name: "Rebecca Botting", role: "Editor", image: bottingImg },
    { name: "Ejarias P. Burgin", role: "Editor", image: ejariasImg },
    { name: "Frantzline Tingue", role: "Editor", image: tingueImg},
    { name: "Tony Eiland", role: "Editor", image: eilandImg },
    { name: "Alexis Kirkpatrick", role: "Editor", image: kirkpatrickImg },
    { name: "Molly McConnell", role: "Editor", image: mcconnellImg },
    { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
    { name: "Marion Rodriguez", role: "Editor", image: rodriguezImg },
    { name: "Ava Savino", role: "Editor", image: savinoImg },
    { name: "Bonnie Shoultz", role: "Editor", image: shoultzImg },
    { name: "Shilloh Withers", role: "Editor", image: withersImg },
    { name: "Troy White", role: "Senior Editor", image: whiteImg },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: berry  },
  ],
"2025": [
  { name: "Robin Brownlee", role: "Editor", image: brownleeImg },
  { name: "Rebecca Botting", role: "Editor", image: bottingImg },
  { name: "Mary Carr", role: "Editor", image: carrImg },
  { name: "Charlee Crosby", role: "Editor", image: crosbyImg },
  { name: "Tony Eiland", role: "Editor", image: eilandImg },
  { name: "Sierra Huff", role: "Editor", image: huffImg },
  { name: "Freddie Jackson", role: "Editor", image: jacksonImg },
  { name: "Molly McConnell", role: "Editor", image: mcconnellImg },
  { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
  { name: "Marion Rodriguez", role: "Editor", image: rodriguezImg },
  { name: "Bonnie Shoultz", role: "Editor", image: shoultzImg },
  { name: "Troy White", role: "Senior Editor", image: whiteImg },
  { name: "Gabriella Wilson", role: "Editor", image: willsonImg },
  { name: "Patrick W. Berry", role: "Faculty Adviser", image: berry },
],
"2024": [
  { name: "Jessie Anderson", role: "Editor", image: andersonImg },
  { name: "Montwella Bufford", role: "Editor", image: buffordImg },
  { name: "Ilhy Gomez Del Campo Rojas", role: "Editor", image: gomezImg },
  { name: "Vince Moody", role: "Editor", image: moodyImg },
  { name: "Katherine Nikolau", role: "Editor", image: nikolauImg },
  { name: "Daquan Noel", role: "Editor", image: noelImg },
  { name: "Troy Paris", role: "Editor", image: parisImg },
  { name: "Theodore Robinson", role: "Editor", image: robinsonImg },
  { name: "James Seibles", role: "Editor", image: seiblesImg },
  { name: "Jacqueline Thompkins", role: "Editor", image: thompkinsImg }, 
  { name: "Troy White", role: "Senior Editor", image: whiteImg }, 
  { name: "Sherba Whitehurst", role: "Editor", image: whitehurstImg },
  { name: "Michael J. Willacy", role: "Editor", image: willacyImg },
  { name: "Daquane Williams", role: "Editor", image: williamsImg },
  { name: "Gabriella Wilson", role: "Editor", image: willsonImg }, 
  { name: "Patrick W. Berry", role: "Faculty Adviser", image: berry },
],

  "2023": [
    { name: "Fátima Bings Martínez", role: "Editor", image: bingsImg },
    { name: "Karl Deans", role: "Editor", image: deansImg },
    { name: "Luke Hardy", role: "Editor", image: hardyImg },
    { name: "Brian T. Shaw", role: "Editor", image: shawImg },
    { name: "Cherise Hunter Titus", role: "Editor", image: titusImg },
    { name: "Troy White", role: "Editor", image: whiteImg },
    { name: "Patrick W. Berry", role: "Faculty Adviser", image: berry },
  ],

};

const People = () => {
  const { year } = useParams<{ year: string }>();
  const currentYear = year || "2026";

  // Redirect if invalid year
  if (!teams[currentYear]) {
    return <Navigate to="/people/2026" replace />;
  }

  const team = teams[currentYear];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Editorial Team {currentYear}
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the editors, contributors, and community members who make Project Mend possible.
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg border-2 border-muted">
                  <img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{person.name}</h3>
                <p className="text-sm text-primary font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
