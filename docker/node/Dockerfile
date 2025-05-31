FROM node:22

WORKDIR /usr/src/app
ENV NODE_PATH=./
COPY run_node_js_container /usr/local/bin/run_node_js_container
RUN chmod +x /usr/local/bin/run_node_js_container
EXPOSE 5000 9229
ENTRYPOINT ["run_node_js_container"]
