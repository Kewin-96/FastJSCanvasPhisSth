function simulation()
{
    //if(DEBUG_logIterator < 100)
    {
        // clear canvas
        for(var i = 0; i < particlesCount; i++)
            drawPixel(particles[i].position.x, particles[i].position.y, 0,0,0);

        for(var i = 0; i < particlesCount; i++)
        {
            // update of position and speed
            particles[i].position.x += particles[i].speed.x / 100.0;
            if(particles[i].position.x > canvasWidth)
            {
                particles[i].position.x = 2 * canvasWidth - particles[i].position.x;
                particles[i].speed.x *= (-1);
            }
            else if(particles[i].position.x < 0)
            {
                particles[i].position.x = Math.abs(particles[i].position.x);
                particles[i].speed.x *= (-1);
            }

            particles[i].position.y += particles[i].speed.y / 100.0;
            if(particles[i].position.y > canvasHeight)
            {
                particles[i].position.y = 2 * canvasHeight - particles[i].position.y;
                particles[i].speed.y *= (-1);
            }
            else if(particles[i].position.y < 0)
            {
                particles[i].position.y = Math.abs(particles[i].position.y);
                particles[i].speed.y *= (-1);
            }
            
            // draw particle
            drawPixel(particles[i].position.x, particles[i].position.y, particles[i].color.r, particles[i].color.g, particles[i].color.b);
        }

        DEBUG_logIterator++;
    }
}