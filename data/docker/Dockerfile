FROM centos:7
MAINTAINER Victor Yurkin victor.yurkin@gmail.com
LABEL Vendor="CentOS" \
      License=GPLv2 \
      Version=2.4.6-40

RUN yum -y --setopt=tsflags=nodocs update && \
    yum -y --setopt=tsflags=nodocs install httpd && \
    yum clean all

RUN yum -y install wget vim git

RUN wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm && \
    wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm && \
    rpm -Uvh remi-release-7.rpm epel-release-latest-7.noarch.rpm && \
    yum -y install yum-utils && \
    yum-config-manager --enable remi-php72 && \
    yum -y --setopt=tsflags=nodocs update && \
    yum -y --setopt=tsflags=nodocs install php php-pdo php-pdo_mysql php-intl php-xml php-mbstring php-zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ADD ./apache-config.conf /etc/httpd/conf.d/vhosts.conf
RUN rm -f /etc/httpd/conf.d/welcome.conf

EXPOSE 80

# Simple startup script to avoid some issues observed with container restart
ADD run-httpd.sh /run-httpd.sh
RUN chmod -v +x /run-httpd.sh

CMD ["/run-httpd.sh"]