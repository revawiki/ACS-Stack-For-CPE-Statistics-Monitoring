# ACS Stack For CPE Statistics Monitoring

This project was created as an improvement for [TIG-Stack for Monitoring RouterOS using HTTP-Listener](https://github.com/revawiki/TIG-Stack-for-Monitoring-RouterOS-using-HTTP-Listener) with ACS-Stack approach. Project was created using TIG-Stack and GenieACS with Mongo running on Docker. RouterOS with TR069 package was used as the CPE Device. Statistics data was parsed as JSON via HTTP Post Webhook method using ext script.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing and Running ACS-Stack

### Setting-Up the RouterOS

#### Expected visual
![Grafana-Dashboard](https://raw.githubusercontent.com/revawiki/ACS-Stack-For-CPE-Statistics-Monitoring/master/img/cpe-visualization.png)

## Built With

* [Grafana](http://www.grafana.com) for Data visualization.
* [InfluxDB](https://www.influxdata.com/) for Database.
* [Telegraf](https://github.com/influxdata/telegraf/tree/master/plugins) for Metric Collecting Agent.
* [RouterOS](https://mikrotik.com/) for Monitored Router.
* [VirtualBox](https://www.virtualbox.org/) for Router Visualization.
* [Docker](https://www.docker.com) for Container Virtualization.

## Credits

* [Jitsi-Monitoring](https://github.com/haidlir/jitsi-monitoring) by Haidlir Naqvi.
* [Telegraf HTTP Listener plugin use case](https://thenewstack.io/how-i-created-a-telegraf-plugin-to-monitor-solar-panels/) by Julius Marozas.
* [Virtualbox set-up for docker on host connectivity](http://pinter.org/archives/7719) by Lazlo Pinter


##### Question/Inquiries
If you have any question regarding the repo, feel free to e-mail me at reva.wiki@gmail.com. Thank you.

