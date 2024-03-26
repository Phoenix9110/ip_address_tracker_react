import PanelItem from './PanelItem'
import { ipStore } from "@/store/IPstore"

const PanelInformation: React.FC = () => {
  const ipInformation = ipStore((state:any) => state.ipInformation)

  return (
    <section className="panel_information">
      {ipInformation.map((ipInfo:any) => {
        if(ipInfo.item!=='coordinates')
          return(
            <PanelItem key={ipInfo.item} {...ipInfo}/>
          )
      })}
    </section>
  );
};



export default PanelInformation;