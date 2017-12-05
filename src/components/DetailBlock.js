import React, { Component } from "react";
import { Tab2, Tabs2 } from "@blueprintjs/core";
import BlockInfo from "./BlockInfo";
import UTXOPoolTable from "./UTXOPoolTable";
class DetailBlock extends Component {
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <Tabs2>
          <Tab2
            id="blockinfo"
            title="Block Info"
            panel={<BlockInfo block={this.props.block} />}
          />
          <Tab2
            id="utxopool"
            title="UTXOPool"
            panel={
              <UTXOPoolTable
                block={this.props.block}
                identities={this.props.identities}
              />
            }
          />
        </Tabs2>
      </div>
    );
  }
}

export default DetailBlock;
