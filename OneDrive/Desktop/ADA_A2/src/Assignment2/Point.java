/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Assignment2;

/**
 *
 * @author LENOVO
 */
public class Point implements Comparable<Point> {
    private int x;
    private int y;
    private float tangent;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
        this.tangent = 0;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
    
     public float getTangent() {
        return tangent;
    }

    public void setTangent(float tangent) {
        this.tangent = tangent;
    }
    
    public double calcDistance(Point a, Point b) {
        double deltaX = (a.getX() - b.getX())*(a.getX() - b.getX());
        double deltaY = (a.getY() - b.getY())*(a.getY() - b.getY());
        return 
    }

    @Override
    public int compareTo(Point o) {
        if (this.tangent < o.getTangent())
            return -1;
        else if (this.tangent > o.getTangent())
            return 1;
        return 0;
    }
}
