# ACS Stack For CPE Statistics Monitoring

This project was created as an improvement for [TIG-Stack for Monitoring RouterOS using HTTP-Listener](https://github.com/revawiki/TIG-Stack-for-Monitoring-RouterOS-using-HTTP-Listener) with ACS-Stack approach. Project was created using TIG-Stack and GenieACS with Mongo running on Docker. RouterOS with TR069 package was used as the CPE Device. Statistics data was parsed as JSON via HTTP Post Webhook method using ext script.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing and Running ACS-Stack

Guide to set-up ACS-stacks.

1. Install Docker & Docker-Compose if it hasn't been installed on your machine and run it.\
[Docker Install](https://docs.docker.com/get-docker/) & [Docker-Compose Install](https://docs.docker.com/compose/install/)

2. Build GenieACS Docker image following guidance from [drumsergio/genieacs](https://github.com/DrumSergio/genieacs-docker#pullbuild-dockerfile)
```
$ docker build -f GenieACS.dockerfile . -t drumsergio/genieacs:local
```

3. Clone this repository into your machine.
```
$ git clone https://github.com/revawiki/ACS-Stack-For-CPE-Statistics-Monitoring
```

3. Go to the cloned directory, and execute the bashfile.
```
$ ./up.sh
```

### Pre-steps for CPE-ACS Connectivity
1. From GenieACS web interface (http://localhost:3001), configure CPE to ACS authentication refering to [this guide](https://github.com/genieacs/genieacs/wiki/GenieACS-Auth-Config#cpe-to-acs-in-version-120).

2. From CPE console/gui configuration, adjust the CPE's TR069 connection settings.

3. Back to GenieACS web interface, overwrite the default provision script using the script provided [here](https://github.com/revawiki/ACS-Stack-For-CPE-Statistics-Monitoring/blob/master/script/provision-script.js).

4. [Restart](https://docs.docker.com/engine/reference/commandline/restart/) the GenieACS docker service 

#### Expected visual
![Grafana-Dashboard](https://raw.githubusercontent.com/revawiki/ACS-Stack-For-CPE-Statistics-Monitoring/master/img/cpe-visualization.png)

## Built With

* [TIG-Stack for Monitoring RouterOS](https://github.com/revawiki/TIG-Stack-for-Monitoring-RouterOS-using-HTTP-Listener) for this case-based TIG-Stack.
* [RouterOS with TR069](https://mikrotik.com/) for CPE Device.
* [GenieACS](https://genieacs.com/) for TR069 remote management.
* [Docker](https://www.docker.com/) for Container Virtualization.

## Credits

* [ACS-Stack](https://github.com/haidlir/ACS-Stack) by Haidlir Naqvi.
* [RouterOS TR069 Data Model](https://wiki.mikrotik.com/tr069ref/current.html) by Mikrotik.
* [GenieACS for Docker](https://github.com/DrumSergio/genieacs-docker) by DrumSergio

##### Question/Inquiries
If you have any question regarding the repo, feel free to e-mail me at reva.wiki@gmail.com. Thank you.

