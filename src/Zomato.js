import React, { Component } from "react";

export default class Upload extends Component {
  state = { selectedFile: {}, dragImage: "", dropImage: "" };

  fileChangedHandler = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    let name = event.target.name;
    reader.onloadend = () => {
      this.setState(prevState => ({
        selectedFile: {
          ...prevState.selectedFile,
          [name]: [file, reader.result]
        }
      }));
    };
    reader.readAsDataURL(file);
  };

  onDragStart = event => {
      console.log(event.target)
    this.setState({
      dragImage: event.target.src
    });
  };

  onDragEnd = event => {
    event.target.src = this.state.dropImage;
  }

  onDrop = event => {
    event.target.src = this.state.dragImage;
  };

  onDragOver = event => {
    event.preventDefault();
    this.setState({
      dropImage: event.target.src
    });
  };
  render() {
      //console.log(this.state,"State")
    return (
      <div className="row">
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="0"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                  draggable="true"
                  onDragStart={this.onDragStart}
                  onDragEnd={this.onDragEnd}
                  src={
                    this.state.selectedFile[0]
                      ? this.state.selectedFile[0][1]
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABUADyLs7e0AAAacnqAtOUMAABEcKjamp6qtsLMdJTBYX2V8gIQAABvk5eYAAA2zt7nV2NpASFEABhtpb3N0eX0AECAyPUYgLTliZ2zBw8UPGyohKDIYHyyRlJdUoWuXAAACX0lEQVR4nO3ceXOaQBiAcWAxIhUjRqN4NDaxOfz+H7BoeuzidooMe9nn9yfzkvjMKB4LRBEAAAAAAAAAAAAAAAAAAAAAAAAAAACAGybWX0yZCNdxZ6+JOSPXcSd5mcamVMuB67xa/lAYK0zvvCkc3vev8qlwPI8mfYuyyqPC2bz/g57IhhRaQmFXFNpDYVcU2nOLhSJXHOrCRd4LucdhoViVspf6E3JxKHuxl54K7grFKikUpy8BRT823/8UuSsc3Jn7Plg85r4UpuP+1X+2ePClMF1O+7evPCocHnPRt3w+86kwM/D+R6E1FHZFoT0UdkWhPdcVirz1ZJiF4li2Hg2yUCySNDm2nA2zcFXVn9LbPUoK7aFQRqEyS6E1FMooVGYptIZCGYXKLIXWUCj7LMz/PRgFUni5FvFZ2NysfdghFIrs41H1/hbH8dt7Y+vHXrt3AIXb5GJRN9YuECdTze4BFIrppuVS73AVZmE0ebrfNJwWxIvmxk2y0+wdQmE0WTRsl2lcfN02N69DfR1eHkz/cizV7xtEYdP/8o5P4c9ZCq2hUEahMkuhNRTKKFRmKbSGQhmFymyjcBBGYTaLq/01hbvfV6qPvrm6hvSqM4bWz4n2JwuNU2FcSFeqO7sO+Mrz2lrfNeBc2BBEYWu6wrH2l1XTjBYW6i0VynXv/6YFo2dfHtQ1Dje3xbB1fqk7FHZFoT0UduVXYZUZuJfJfOxRYVwZuGPSMPap0BBPCpeVscK09KEw2hl4hv7y6jruTExGpmgXhwEAAAAAAAAAAAAAAAAAAAAAAAAAAADcjB8HMnnfa0t+gwAAAABJRU5ErkJggg=="
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="1"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                  draggable="true"
                  onDragStart={this.onDragStart}
                  onDragEnd={this.onDragEnd}
                  src={
                    this.state.selectedFile[1]
                      ? this.state.selectedFile[1][1]
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABUADyLs7e0AAAacnqAtOUMAABEcKjamp6qtsLMdJTBYX2V8gIQAABvk5eYAAA2zt7nV2NpASFEABhtpb3N0eX0AECAyPUYgLTliZ2zBw8UPGyohKDIYHyyRlJdUoWuXAAACX0lEQVR4nO3ceXOaQBiAcWAxIhUjRqN4NDaxOfz+H7BoeuzidooMe9nn9yfzkvjMKB4LRBEAAAAAAAAAAAAAAAAAAAAAAAAAAACAGybWX0yZCNdxZ6+JOSPXcSd5mcamVMuB67xa/lAYK0zvvCkc3vev8qlwPI8mfYuyyqPC2bz/g57IhhRaQmFXFNpDYVcU2nOLhSJXHOrCRd4LucdhoViVspf6E3JxKHuxl54K7grFKikUpy8BRT823/8UuSsc3Jn7Plg85r4UpuP+1X+2ePClMF1O+7evPCocHnPRt3w+86kwM/D+R6E1FHZFoT0UdkWhPdcVirz1ZJiF4li2Hg2yUCySNDm2nA2zcFXVn9LbPUoK7aFQRqEyS6E1FMooVGYptIZCGYXKLIXWUCj7LMz/PRgFUni5FvFZ2NysfdghFIrs41H1/hbH8dt7Y+vHXrt3AIXb5GJRN9YuECdTze4BFIrppuVS73AVZmE0ebrfNJwWxIvmxk2y0+wdQmE0WTRsl2lcfN02N69DfR1eHkz/cizV7xtEYdP/8o5P4c9ZCq2hUEahMkuhNRTKKFRmKbSGQhmFymyjcBBGYTaLq/01hbvfV6qPvrm6hvSqM4bWz4n2JwuNU2FcSFeqO7sO+Mrz2lrfNeBc2BBEYWu6wrH2l1XTjBYW6i0VynXv/6YFo2dfHtQ1Dje3xbB1fqk7FHZFoT0UduVXYZUZuJfJfOxRYVwZuGPSMPap0BBPCpeVscK09KEw2hl4hv7y6jruTExGpmgXhwEAAAAAAAAAAAAAAAAAAAAAAAAAAADcjB8HMnnfa0t+gwAAAABJRU5ErkJggg=="
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="2"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                  draggable="true"
                  onDragStart={this.onDragStart}
                  onDragEnd={this.onDragEnd}
                  src={
                    !!this.state.selectedFile[2]
                      ? this.state.selectedFile[2][1]
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABUADyLs7e0AAAacnqAtOUMAABEcKjamp6qtsLMdJTBYX2V8gIQAABvk5eYAAA2zt7nV2NpASFEABhtpb3N0eX0AECAyPUYgLTliZ2zBw8UPGyohKDIYHyyRlJdUoWuXAAACX0lEQVR4nO3ceXOaQBiAcWAxIhUjRqN4NDaxOfz+H7BoeuzidooMe9nn9yfzkvjMKB4LRBEAAAAAAAAAAAAAAAAAAAAAAAAAAACAGybWX0yZCNdxZ6+JOSPXcSd5mcamVMuB67xa/lAYK0zvvCkc3vev8qlwPI8mfYuyyqPC2bz/g57IhhRaQmFXFNpDYVcU2nOLhSJXHOrCRd4LucdhoViVspf6E3JxKHuxl54K7grFKikUpy8BRT823/8UuSsc3Jn7Plg85r4UpuP+1X+2ePClMF1O+7evPCocHnPRt3w+86kwM/D+R6E1FHZFoT0UdkWhPdcVirz1ZJiF4li2Hg2yUCySNDm2nA2zcFXVn9LbPUoK7aFQRqEyS6E1FMooVGYptIZCGYXKLIXWUCj7LMz/PRgFUni5FvFZ2NysfdghFIrs41H1/hbH8dt7Y+vHXrt3AIXb5GJRN9YuECdTze4BFIrppuVS73AVZmE0ebrfNJwWxIvmxk2y0+wdQmE0WTRsl2lcfN02N69DfR1eHkz/cizV7xtEYdP/8o5P4c9ZCq2hUEahMkuhNRTKKFRmKbSGQhmFymyjcBBGYTaLq/01hbvfV6qPvrm6hvSqM4bWz4n2JwuNU2FcSFeqO7sO+Mrz2lrfNeBc2BBEYWu6wrH2l1XTjBYW6i0VynXv/6YFo2dfHtQ1Dje3xbB1fqk7FHZFoT0UduVXYZUZuJfJfOxRYVwZuGPSMPap0BBPCpeVscK09KEw2hl4hv7y6jruTExGpmgXhwEAAAAAAAAAAAAAAAAAAAAAAAAAAADcjB8HMnnfa0t+gwAAAABJRU5ErkJggg=="
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="3"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                  draggable="true"
                  onDragStart={this.onDragStart}
                  onDragEnd={this.onDragEnd}
                  src={
                    this.state.selectedFile[3]
                      ? this.state.selectedFile[3][1]
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABUADyLs7e0AAAacnqAtOUMAABEcKjamp6qtsLMdJTBYX2V8gIQAABvk5eYAAA2zt7nV2NpASFEABhtpb3N0eX0AECAyPUYgLTliZ2zBw8UPGyohKDIYHyyRlJdUoWuXAAACX0lEQVR4nO3ceXOaQBiAcWAxIhUjRqN4NDaxOfz+H7BoeuzidooMe9nn9yfzkvjMKB4LRBEAAAAAAAAAAAAAAAAAAAAAAAAAAACAGybWX0yZCNdxZ6+JOSPXcSd5mcamVMuB67xa/lAYK0zvvCkc3vev8qlwPI8mfYuyyqPC2bz/g57IhhRaQmFXFNpDYVcU2nOLhSJXHOrCRd4LucdhoViVspf6E3JxKHuxl54K7grFKikUpy8BRT823/8UuSsc3Jn7Plg85r4UpuP+1X+2ePClMF1O+7evPCocHnPRt3w+86kwM/D+R6E1FHZFoT0UdkWhPdcVirz1ZJiF4li2Hg2yUCySNDm2nA2zcFXVn9LbPUoK7aFQRqEyS6E1FMooVGYptIZCGYXKLIXWUCj7LMz/PRgFUni5FvFZ2NysfdghFIrs41H1/hbH8dt7Y+vHXrt3AIXb5GJRN9YuECdTze4BFIrppuVS73AVZmE0ebrfNJwWxIvmxk2y0+wdQmE0WTRsl2lcfN02N69DfR1eHkz/cizV7xtEYdP/8o5P4c9ZCq2hUEahMkuhNRTKKFRmKbSGQhmFymyjcBBGYTaLq/01hbvfV6qPvrm6hvSqM4bWz4n2JwuNU2FcSFeqO7sO+Mrz2lrfNeBc2BBEYWu6wrH2l1XTjBYW6i0VynXv/6YFo2dfHtQ1Dje3xbB1fqk7FHZFoT0UduVXYZUZuJfJfOxRYVwZuGPSMPap0BBPCpeVscK09KEw2hl4hv7y6jruTExGpmgXhwEAAAAAAAAAAAAAAAAAAAAAAAAAAADcjB8HMnnfa0t+gwAAAABJRU5ErkJggg=="
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
