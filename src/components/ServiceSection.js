import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem"

export default function ServiceSection(){
    return (
        <div>
            <SectionTitle heading="SERVICIOS"
            subheading="LO QUE HARÉ POR TI"/>

            <div className="services__allItems">
                <ServicesSectionItem/>
            </div>
        </div>
    )
}