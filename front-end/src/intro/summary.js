import React from 'react';

const enums = {
    frappe: <a href="https://frappe.io/">Frappe Framework</a>,
    erpnext: <a href="https://erpnext.com/">Erpnext</a>    
}


const content = {
    software:( 
        <ul class="list-group">
            <li class="list-group-item">
                Full stack development using <em>{enums.frappe}</em> that uses Python and Javascript. Customized 
                a self-hosted instance of <em>{enums.erpnext}</em> using feedback and suggestions from
                users.
            </li>
            <li class="list-group-item">
                Full stack development using NodeJs connected to a Mariadb database with custom api that allows connection through Rest API to any
                apps running on <em>{enums.frappe}.</em>
            </li>
            <li class="list-group-item">
                Written code on <em>Classic ASP</em> running Javascript.
            </li>
            <li class="list-group-item">
                Written server scripts using <em>Powershell and Bash</em>.
            </li>
            <li class="list-group-item">
                Experience with version control such as <em>Git</em>
            </li>
            <li class="list-group-item">
                Experience with following languages: <em>Python, Javascript, Java, HTML, CSS, SQL, emash, and Powershell.</em>
            </li>
            <li class="list-group-item">
                Experience with following web technologies: <em>Nodejs, Bootstrap, Jquery, Rest APIs and React.</em>
            </li>
        </ul>
    ),
    networkSystems:(
        <ul class="list-group">
            <li class="list-group-item">
                Network design between remote offices that includes proper IP addressing, point to point connections,
                wireless networks and secure wan connections using VPNs.
            </li>
            <li class="list-group-item">
                Experience with configuration and management of virtualization technologies such as <em>VMware Hypervisor and Microsoft Hyper-V.</em>
            </li>
            <li class="list-group-item">
                Experience managing servers on <em>Google Cloud</em> and other cloud based providers.
            </li>
            <li class="list-group-item">
                Configuration and management of Windows Server services such as <em>Active Directory, Group policy, NPS, File Servers, IIS etc. </em>
            </li>
            <li class="list-group-item">
                Management of Debian based distributions <em>(Ubuntu, Mint)</em> with some experience in RHEL linux distribution <em>(CentOs)</em>
            </li>
            <li class="list-group-item">
                LAN network configuration<em>(VLANs)</em> to segregate different networks.
            </li>
            <li class="list-group-item">
                WAN network configurations<em>(VPNs)</em> for connections between remote offices and cloud services.
            </li>
            <li class="list-group-item">
                Management of linux based services such as <em>ERPNext, Nginx and Squid proxy.</em>
            </li>
            <li class="list-group-item">
                Experience with different firewall providers such as <em>pfSense, Fortigate, Checkpoint, Cisco and Sonicwall.</em>
            </li>
        </ul>
    ),
}

export default class Experience extends React.Component{
    render (){
        return (
            <div className="card border-seondary mb-3">
                <div className="card-header">Summary</div>
                <div className="card-body">
                    <h4 className="card-title">Software:</h4>
                    {content.software}
                </div>
                <div className="card-body">
                    <h4 className="card-title">Network and Systems:</h4>
                    {content.networkSystems}
                </div>
            </div>
        )
    }
}