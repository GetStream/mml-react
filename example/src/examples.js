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
			<button name="action" value="view">View</button>
			<button name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>3 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button name="action" value="view">View</button>
			<button name="action" value="add_to_cart">Add to Cart</button>
		</item>
		<item>
			<image src="https://i1.adis.ws/i/boohooamplience/agg70544_red_xl?$product_image_main_thumbnail$" />
			<text>4 Damn Dress</text>
			<text>
			It's getting hot in here. This dress features an off-the-shoulder, mini silhouette, ruffled edges, puff sleeves, and lace-up detailing at front.
			</text>
			<md>**$50**</md>
			<button name="action" value="view">View Item</button>
			<button name="action" value="add_to_cart">Add to Cart</button>
		</item>
	</carousel>
</mml>`,
  scheduling: `
<mml>
	<text>Are you available to work Thursday the 9th?</text>
	<button name="available" value="yes">Yes</button>
	<button name="available" value="no">No</button>
</mml>
	`,
  massage: `
<mml>
	<text>When would you like to schedule your massage?</text>
	<scheduler name="massage_appointment"  value="2019-06-17T19:00:00.000Z" duration="60" ical_availability="https://gist.githubusercontent.com/tschellenbach/3d66618fa0abfa3344a2596c873bdcfd/raw/83271784b58bbd5554709cda38b1a668522b7d32/test.ical" />
  <button name="action" value="reserve">Reserve</button>
  <add_to_calendar title="Massage at Elements by Jessica" start="2019-06-17T19:00:00.000Z" end="2019-06-17T19:30:00.000Z" description="Please arrive 10 min early" location="Boulder" />
</mml>
	`,
  paging: `
<mml>
  <row>
    <column width="10">
      <text>Alert: The server is on fire!!</text>
    </column>
    <column width="2">
      <overflow>
        <button name="action" value="Ignore">Ignore</button>
        <button name="action" value="ReRoute Ticket">ReRoute Ticket</button>
        <button name="action" value="Turn off the server">Turn off the server</button>
        <button name="action" value="Book a vacation">Book a vacation</button>
      </overflow>
    </column>
  </row>
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
	<button name="send" value="submit">Submit</button>
</mml>
	`
};
