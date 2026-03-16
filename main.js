// ml-shoppy-portal: logic for cart processing
document.addEventListener('DOMContentLoaded', () => {
    const inputUrl = document.getElementById('ml-url-input');
    const btnProcess = document.getElementById('process-cart');
    const container = document.getElementById('cart-display');

    // Estilos inyectados dinámicamente para el diseño ML
    const styles = `
        :root { --ml-yellow: #FFF159; --ml-blue: #3483FA; --ml-gray: #ebebeb; }
        body { font-family: 'Proxima Nova', Helvetica, Arial, sans-serif; background: var(--ml-gray); margin: 0; padding: 20px; }
        .product-card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); max-width: 600px; margin: 20px auto; }
        .price-original { text-decoration: line-through; color: #999; font-size: 0.9em; }
        .price-discount { color: #00a650; font-size: 1.5em; font-weight: bold; }
        .payment-box { background: #f5f5f5; padding: 15px; border-radius: 4px; margin-top: 15px; border-left: 4px solid var(--ml-blue); }
        .btn-pay { background: var(--ml-blue); color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%; margin-top: 10px; }
        .btn-pay:hover { background: #2968c8; }
        .badge-save { background: #00a650; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px; margin-left: 10px; }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const simulateProductFetch = (url) => {
        // Simulación de productos basados en una URL de carrito
        return {
            title: "Pack de Productos Importados - Selección Carrito",
            mlPrice: 45000,
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_612253-MLA50346045551_062022-O.webp",
            link: url
        };
    };

    btnProcess.addEventListener('click', () => {
        const url = inputUrl.value;
        if (!url.includes('mercadolibre')) {
            alert('Por favor, ingresa una URL válida de Mercado Libre');
            return;
        }

        btnProcess.textContent = 'Procesando...';
        
        // Simular latencia de red
        setTimeout(() => {
            const product = simulateProductFetch(url);
            const discountedPrice = product.mlPrice * 0.80;
            const advancePayment = discountedPrice * 0.50;

            container.innerHTML = `
                <div class="product-card">
                    <h3>Resumen de tu Importación</h3>
                    <p style="color: #666; font-size: 14px;">${product.title}</p>
                    
                    <div style="margin: 15px 0;">
                        <span class="price-original">$${product.mlPrice.toLocaleString()}</span>
                        <span class="badge-save">20% OFF CARGO EXCLUSIVO</span>
                        <br>
                        <span class="price-discount">$${discountedPrice.toLocaleString()}</span>
                    </div>

                    <div class="payment-box">
                        <p style="margin: 0; font-weight: bold; color: #333;">Esquema de pago seguro:</p>
                        <p style="margin: 5px 0; font-size: 18px;">Pagas ahora (50%): <strong>$${advancePayment.toLocaleString()}</strong></p>
                        <p style="margin: 5px 0; font-size: 14px; color: #666;">
                            <i class="fas fa-truck"></i> El 50% restante ($${advancePayment.toLocaleString()}) se abona al recibir en domicilio.
                        </p>
                    </div>

                    <button class="btn-pay" onclick="alert('Redirigiendo a pasarela de pago seguro...')">
                        Pagar 50% Anticipo
                    </button>
                    
                    <p style="text-align: center; font-size: 12px; color: #999; margin-top: 15px;">
                        Operación protegida por ML-Shoppy Portal.
                    </p>
                </div>
            `;
            btnProcess.textContent = 'Importar Carrito';
        }, 1500);
    });
});

console.log('ML-Shoppy-Portal: Engine Ready');