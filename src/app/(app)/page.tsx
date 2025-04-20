import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Navbar from "./(home)/navbar";

const Home = () => {
  return (
    <div className="space-y-4">
      <Navbar />
      <div>
        <Button>Iam Button</Button>
      </div>
      <div>
        <Input placeholder="this is placeholder. feel free to add anything..." />
      </div>
      <div>
        <Progress value={50} />
      </div>
    </div>
  );
};

export default Home;
