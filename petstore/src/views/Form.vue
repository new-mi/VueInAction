<template>
  <div class="row">
    <div class="col-md-6 mb-3">
      <strong>First Name:</strong>
      <input class="form-control" type="text" v-model.trim="order.firstName" />
    </div>
    <div class="col-md-6 mb-3">
      <strong>Last Name:</strong>
      <input class="form-control" type="text" v-model.trim="order.lastName" />
    </div>
    <div class="col-md-12 mb-3">
      <strong>Address:</strong>
      <input class="form-control" type="text" v-model.trim="order.address" />
    </div>
    <div class="col-md-12 mb-3">
      <strong>City:</strong>
      <input class="form-control" type="text" v-model.trim="order.city" />
    </div>
    <div class="col-md-2 mb-3">
      <strong>State:</strong>
      <select v-model="order.state" class="form-control">
        <option disabled value>State</option>
        <option v-for="state,key in states" :value="state" :key="state">{{key}}</option>
      </select>
    </div>
    <div class="col-md-6 offset-md-4 mb-3">
      <strong>Zip / Postal code:</strong>
      <input class="form-control" type="number" v-model.number="order.zip" />
    </div>
    <div class="col-md-6 boxes mb-3">
      <input
        type="checkbox"
        id="gift"
        value="true"
        :true-value="order.sendGift"
        :false-value="order.dontSendGift"
        v-model="order.gift"
      />
      <label for="gift">Shift As Gidt</label>
    </div>
    <div class="col-md-6 boxes mb-3">
      <input type="radio" id="home" :value="order.home" v-model="order.method" />
      <label for="home">Home</label>
      <input type="radio" id="business" :value="order.business" v-model="order.method" />
      <label for="business">Business</label>
    </div>
    <div class="col-md-6">
      <button type="submit" class="btn btn-primary submit" @click.prevent="submitForm">Place Order</button>
    </div>
    <div class="col-md-12 verify mb-3">
      First Name: {{order.firstName}}
      <br />
      Last Name: {{order.lastName}}
      <br />
      Address: {{order.address}}
      <br />
      City: {{order.city}}
      <br />
      Zip: {{order.zip}}
      <br />
      State: {{order.state}}
      <br />
      Gift: {{order.gift}}
      <br />
      Method: {{order.method}}
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        method: "Home Address",
        home: "Home Address",
        business: "Business Address",
        gift: "Send As A Gift",
        sendGift: "Send As A Gift",
        dontSendGift: "Do Not Send As A Gift"
      },
      states: {
        AL: "Alabama",
        AR: "Arizona",
        CA: "California",
        NV: "Nevada"
      }
    };
  },
  methods: {
    submitForm() {
      alert("Submitted");
    }
  }
};
</script>
