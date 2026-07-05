import LiveAgent from "./LiveAgent";

type Agent = {
  icon: string;
  title: string;
  description: string;
  status: string;
  progress: number;
};

type AgentGridProps = {
  agents: Agent[];
};

export default function AgentGrid({
  agents,
}: AgentGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      {agents.map((agent) => (

        <LiveAgent
          key={agent.title}
          icon={agent.icon}
          title={agent.title}
          description={agent.description}
          status={agent.status}
          progress={agent.progress}
        />

      ))}

    </div>
  );
}