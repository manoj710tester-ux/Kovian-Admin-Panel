import Card from "../UI/Card/Card";
import Graph from "../UI/Graph/Graph";
import BarChart from "../UI/BarChart/BarChart";
import Table from "../UI/Table/Table";

const Dashboard = () => {
  return (
    <div>
      <div
        className="grid grid-cols-4 gap-4 mb-4
        max-[1100px]:grid-cols-2
        max-[768px]:grid-cols-1
        max-[480px]:grid-cols-1"
      >
        <Card
          title="Total Leads"
          value={1234}
          percentageStatus={false}
          percentage={11.82}
        />
        <Card
          title="Closed Leads"
          value={532}
          percentageStatus={false}
          percentage={-0.3}
        />
        <Card
          title="Open Leads"
          value={274}
          percentageStatus={false}
          percentage={5.2}
        />
        <Card
          title="Conversion Rate"
          percentageStatus={true}
          value={13.18}
          percentage={-2.1}
        />
      </div>
      <div className="grid grid-cols-2 max-[1100px]:grid-cols-1 gap-4 mb-5">
        <div className="bg-card-background p-4 rounded-lg">
          <Graph title="Leads" />
        </div>
        <div className="bg-card-background p-4 rounded-lg">
          <BarChart title="Lead Success" />
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-card-background p-4 rounded-lg">
          <Table title="New Leads" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
