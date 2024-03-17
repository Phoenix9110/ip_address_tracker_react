import PanelItem from './PanelItem'
import { ipStore } from "@/store/IPstore"

const PanelInformation: React.FC<UserProps> = () => {
  const ipInformation = ipStore((state:any) => state.ipInformation)
  const {ip, location, timezone, isp} = ipInformation

  return (
    <section className="panel_information">
      {ipInformation.map((ipInfo) => {
        if(ipInfo.item!=='coordinates')
          return(
            <PanelItem key={ipInfo.item} {...ipInfo}/>
          )
      })}
    </section>
  );
};



export default PanelInformation;