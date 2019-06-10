export var examples = {
  food: `
  <mml name="food">
    <md>What's your **favorite** meal of the day?</md>
    <select name="favorite">
      <option value="breakfast">Breakfast rocks</option>
      <option value="lunch">Lunch is the best</option>
      <option value="dinner">Dinner!</option>
    </select>
    <button name="action" value="submit">Submit</button>
  </mml>
  `,
  food2: `
  <mml name="food">
    <md>What's your **favorite** meal of the day?</md>
    <buttonlist name="favorite">
      <button value="breakfast">Breakfast rocks</button>
      <button value="lunch">Lunch is the best</button>
      <button value="dinner">Dinner!</button>
    </buttonlist>
  </mml>
  `,
  commerce: `
<mml>
	<md>Which red dress do you prefer?</md>
	<carousel>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>Nasty Gal's Hot Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button url="https://www.nastygal.com/hot-damn-off-the-shoulder-lace-up-dress/AGG70544.html">View</button>
			<button name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>2 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>3 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>4 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button style="primary" name="action" value="view">View Item</button>
			<button style="secondary" name="action" value="add_to_cart">Add to Cart</button>
		</item>
	</carousel>
</mml>`,
  scheduling: `
<mml>
	<text>Are you available to work Thursday the 9th?</text>
	<button style="primary" name="available" value="yes">Yes</button>
	<button style="secondary" name="available" value="no">No</button>
</mml>
	`,
  massage: `
<mml>
	<text>When would you like to schedule your massage?</text>
	<datepicker initial_date="2019-05-25" name="massage_appointment" />
	<timepicker name="massage_appointment_time" />
  <button style="primary" name="action" value="reserve">Reserve</button>
</mml>
	`,
  paging: `
<mml>
	<text>Alert: The server is on fire!!</text>
	<overflow>
		<button style="secondary" name="action" value="Ignore">Ignore</button>
		<button style="secondary" name="action" value="ReRoute Ticket">ReRoute Ticket</button>
		<button style="secondary" name="action" value="Turn off the server">Turn off the server</button>
		<button style="primary" name="action" value="Book a vacation">Book a vacation</button>
	</overflow>
</mml>
	`,
  flight: `
<mml>
  <text>Here is your flight info:</text>
  <card>
  	<row>
  		<column width="4" align="left">San Francisco</column>
  		<column width="4"></column>
  		<column width="4" align="right">New York</column>
  	</row>
  	<row>
  		<column width="4" align="left"><md>## SFO</md></column>
  		<column width="4" align="center"><icon name="flight" /></column>
  		<column width="4" align="right"><md>## JFK</md></column>
  	</row>
  	<row>
  		<column width="4" offset="4" align="center">
  			<button value="view" text="View Boarding Pass" />
  		</column>
  	</row>
  </card>
</mml>
	`,
  email: `
<mml>
	<text>What's your email?</text>
	<input type="text" name="email" />
	<button style="primary" name="send" value="submit">Submit</button>
</mml>
	`
};
