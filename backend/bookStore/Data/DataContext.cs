using System;
using System.Collections.Generic;
using bookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace bookStore.Data;

public partial class DataContext : DbContext
{
    public DataContext()
    {
    }

    public DataContext(DbContextOptions<DataContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Author> Authors { get; set; }

    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<BookAuthor> BookAuthors { get; set; }

    public virtual DbSet<BookCategory> BookCategories { get; set; }

    public virtual DbSet<BookPublisher> BookPublishers { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Evaluate> Evaluates { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Publisher> Publishers { get; set; }

    public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PHUCLT\\SQLEXPRESS;Database=Bookstore;Trusted_Connection=True;MultipleActiveResultSets=true;trustServerCertificate=true", builder => builder.EnableRetryOnFailure());

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>(entity =>
        {
            entity.HasKey(e => e.AuthorId).HasName("PK__Author__70DAFC145AA81532");

            entity.ToTable("Author");

            entity.Property(e => e.AuthorId)
                .HasMaxLength(36)
                .HasColumnName("AuthorID");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Name).HasMaxLength(100);
        });

        modelBuilder.Entity<Book>(entity =>
        {
            entity.HasKey(e => e.Isbn).HasName("PK__Book__447D36EBC4B2F9E9");

            entity.ToTable("Book");

            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Description)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Language)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.PageCount)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<BookAuthor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BookAuth__3214EC27D4B513B5");

            entity.ToTable("BookAuthor");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.AuthorId)
                .HasMaxLength(36)
                .HasColumnName("AuthorID");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");

            entity.HasOne(d => d.Author).WithMany(p => p.BookAuthors)
                .HasForeignKey(d => d.AuthorId)
                .HasConstraintName("FK__BookAutho__Autho__182C9B23");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.BookAuthors)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__BookAuthor__ISBN__173876EA");
        });

        modelBuilder.Entity<BookCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BookCate__3214EC27C4C5618C");

            entity.ToTable("BookCategory");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.CateId)
                .HasMaxLength(36)
                .HasColumnName("CateID");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");

            entity.HasOne(d => d.Cate).WithMany(p => p.BookCategories)
                .HasForeignKey(d => d.CateId)
                .HasConstraintName("FK__BookCateg__CateI__239E4DCF");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.BookCategories)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__BookCatego__ISBN__24927208");
        });

        modelBuilder.Entity<BookPublisher>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BookPubl__3214EC27B694D60B");

            entity.ToTable("BookPublisher");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");
            entity.Property(e => e.PubId)
                .HasMaxLength(36)
                .HasColumnName("PubID");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.BookPublishers)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__BookPublis__ISBN__1CF15040");

            entity.HasOne(d => d.Pub).WithMany(p => p.BookPublishers)
                .HasForeignKey(d => d.PubId)
                .HasConstraintName("FK__BookPubli__PubID__1DE57479");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Category__3214EC2783D8E5CF");

            entity.ToTable("Category");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Parent).HasMaxLength(36);

            entity.HasOne(d => d.ParentNavigation).WithMany(p => p.InverseParentNavigation)
                .HasForeignKey(d => d.Parent)
                .HasConstraintName("FK__Category__Parent__20C1E124");
        });

        modelBuilder.Entity<Evaluate>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Evaluate__3214EC27691D6E8D");

            entity.ToTable("Evaluate");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Comment).HasColumnType("text");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");
            entity.Property(e => e.UserId)
                .HasMaxLength(36)
                .HasColumnName("UserID");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.Evaluates)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__Evaluate__ISBN__2F10007B");

            entity.HasOne(d => d.User).WithMany(p => p.Evaluates)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Evaluate__UserID__300424B4");
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC278E7F89D2");

            entity.ToTable("Favorite");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");
            entity.Property(e => e.UserId)
                .HasMaxLength(36)
                .HasColumnName("UserID");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__Favorite__ISBN__33D4B598");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorite__UserID__32E0915F");
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Image__3214EC278527F758");

            entity.ToTable("Image");
            entity.Property(e => e.Isbn)
               .HasMaxLength(36)
               .HasColumnName("ISBN");
            entity.Property(e => e.ImagePath).HasMaxLength(500);
            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.Images)
                .HasForeignKey(d => d.Isbn)
                .HasConstraintName("FK__Image__Isbn__5CD6CB2B");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Order__3214EC2739311086");

            entity.ToTable("Order");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Address).HasMaxLength(100);
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.OrderDay).HasColumnType("datetime");
            entity.Property(e => e.UserId)
                .HasMaxLength(36)
                .HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Order__UserID__36B12243");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__OrderDet__3214EC271ED98CD6");

            entity.ToTable("OrderDetail");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Isbn)
                .HasMaxLength(36)
                .HasColumnName("ISBN");
            entity.Property(e => e.OderId)
                .HasMaxLength(36)
                .HasColumnName("OderID");

            entity.HasOne(d => d.IsbnNavigation).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.Isbn)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__OrderDetai__ISBN__398D8EEE");

            entity.HasOne(d => d.Oder).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.OderId)
                .HasConstraintName("FK__OrderDeta__OderI__3A81B327");
        });

        modelBuilder.Entity<Publisher>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Publishe__3214EC27B1EC9BCD");

            entity.ToTable("Publisher");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Name).HasMaxLength(100);
        });

        modelBuilder.Entity<RefreshToken>(entity =>
        {
            entity.HasKey(e => e.Token).HasName("PK__RefreshT__1EB4F816F4394CC9");

            entity.ToTable("RefreshToken");

            entity.Property(e => e.Token).HasMaxLength(100);
            entity.Property(e => e.CreateAt).HasColumnType("datetime");
            entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            entity.Property(e => e.IsRevoked).HasColumnName("isRevoked");
            entity.Property(e => e.IsUsed).HasColumnName("isUsed");
            entity.Property(e => e.ParentId)
                .HasMaxLength(100)
                .HasColumnName("ParentID");
            entity.Property(e => e.UserId)
                .HasMaxLength(36)
                .HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.RefreshTokens)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__RefreshTo__UserI__2C3393D0");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Role__3214EC2795083994");

            entity.ToTable("Role");

            entity.Property(e => e.Id)
                .HasMaxLength(15)
                .HasColumnName("ID");
            entity.Property(e => e.Name).HasMaxLength(100);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC27CEA2678A");

            entity.ToTable("User");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("ID");
            entity.Property(e => e.DateOfBirth).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.IsActive).HasColumnName("isActive");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Password).HasMaxLength(100);
            entity.Property(e => e.Phone).HasMaxLength(11);
            entity.Property(e => e.Role).HasMaxLength(15);
            entity.Property(e => e.Username).HasMaxLength(100);

            entity.HasOne(d => d.RoleNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.Role)
                .HasConstraintName("FK__User__Role__29572725");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
