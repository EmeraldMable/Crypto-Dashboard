import { ResponsiveChoropleth } from '@nivo/geo'


const Geo = ({ data , features , dashboard} :any) => (
    <ResponsiveChoropleth
        data={data}
        features={features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale = {dashboard ? 200 : 150}
        projectionTranslation={dashboard ? [ 0.49, 0.9 ] : [0.5 , 0.7]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        
        theme={{
      
            text: {
              fontSize: 11,
              fill: "#ffffff",
              outlineWidth: 0,
              outlineColor: "transparent"
            },
            tooltip:{
              container: {
                background: "#ffffff",
                color: "#333333",
                fontSize: 12
            }
            }
          }}
         
       
        
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#ffffff',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#ffff00',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
export default Geo