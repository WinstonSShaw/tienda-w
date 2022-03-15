import React from 'react';

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};

const About = () => {
	return (
		<div style={styles.container}>
			<h2>About</h2>
			<p>
				Esta es una tienda 100% ficticia, creada a fines de conocer sobre el funcionamiento de REACT. No comparta informacion sensible ya que no es necesaria para ningun tipo de transaccion.
			</p>
			
		</div>
	);
};

export default About;
