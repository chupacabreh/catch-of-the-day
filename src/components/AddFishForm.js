import React from 'react';

class AddFishForm extends React.Component {
  nameRef= React.createRef();
  priceRef= React.createRef();
  statusRef= React.createRef();
  descRef= React.createRef();
  imageRef= React.createRef();

  createFish = (e) => {
    // 1. stop form from submitting
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      //parsefloat converts string to a number
      price: parseFloat(this.priceRef.value.value), 
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value 
    }
    this.props.addFish(fish);
    //refresh the form:
    e.currentTarget.reset();
  }
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" ref={this.nameRef} placeholder="Name" />
        <input name="price" type="text" ref={this.priceRef} placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm; 